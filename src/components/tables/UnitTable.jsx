/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Table, Space, Popconfirm, Form, InputNumber, Input, Button } from 'antd';
import { getUnits, deleteUnit, createUnit, updateUnit } from '../../services/unit';
import CreateUnitModel from '../models/CreateUnitModel';
import { success } from '../message/CustomMessage';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const UnitTable = () => {
  const [units, setUnits] = useState([]);
  const [visible, setVisible] = useState(false);
  const [unit, setUnit] = useState([]);
  const [loading, setLoading] = useState(true);

  const onCancel = (form) => {
    setVisible(false);
    form.resetFields();
  };
  // form related -start
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      allow_decimal: record.allow_decimal,
      short_name: record.short_name,
      actual_name: record.actual_name,
      ...record,
    });
    setEditingKey(record.id);
  };
  const cancel = () => {
    setEditingKey('');
  };

  const loadUnitData = () => {
    getUnits()
      .then((res) => {
        setUnits(res.data.data.datatable);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields().then((values) => {
        console.log(values);
        updateUnit(key, values);
        setEditingKey('');
        loadUnitData();
      });
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  // save unit
  const onCreate = (values) => {
    console.log(values);
    unit.actual_name = values.actual_name;
    unit.short_name = values.short_name;
    unit.allow_decimal = values.allow_decimal;
    createUnit(unit)
      .then((res) => {
        console.log(res);
        setVisible(false);
        loadUnitData();
        success('dasdasd');
      })
      .catch((err) => {
        error('Profile update error :P');
      });
  };

  const handleDelete = (key) => {
    deleteUnit(key);
    loadUnitData();
  };

  useEffect(() => {
    loadUnitData();
  }, []);

  const columns = [
    {
      title: 'Actual Name',
      dataIndex: ['actual_name'],
      editable: true,
      width: '15%',
    },
    {
      title: 'Short Name',
      dataIndex: ['short_name'],
      editable: true,
      width: '15%',
    },
    {
      title: 'Allowed Decimal',
      dataIndex: ['allow_decimal'],
      editable: true,
      width: '10%',
    },
    {
      title: 'Base Unit ID',
      dataIndex: ['base_unit_id'],
    },
    {
      title: 'Base Unit',
      dataIndex: ['base_unit'],
    },
    {
      title: 'Base Unit Multiplier',
      dataIndex: ['base_unit_multiplier'],
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => {
        const editable = isEditing(record);
        return editable ? (
          <Space size="middle">
            <a onClick={() => save(record.id)}>Save</a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </Space>
        ) : (
          <Space size="middle">
            <a onClick={() => edit(record)}>Edit</a>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
              <a>Delete</a>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex[0] === 'allow_decimal' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      <CreateUnitModel visible={visible} onCancel={onCancel} onCreate={onCreate} />
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={() => {
          setVisible(true);
        }}
      >
        Add a row
      </Button>
      <Form form={form} component={false}>
        <Table
          loading={loading}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          columns={mergedColumns}
          dataSource={units}
          pagination={{ defaultPageSize: 4, position: ['bottomCenter'] }}
        />
      </Form>
    </div>
  );
};

export default UnitTable;
