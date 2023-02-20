import React from 'react';
import { Modal, Form, Input, InputNumber } from 'antd';

const CreateUnitModel = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      title="Add Unit"
      okText="Create Unit"
      cancelText="Cancel"
      onCancel={() => {
        onCancel(form);
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log(info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="actual_name"
          label="Actual Name"
          rules={[
            {
              required: true,
              message: 'Please input the Actual Name!',
            },
          ]}
        >
          <Input
            allowClear
            style={{
              width: '450px',
            }}
          />
        </Form.Item>
        <Form.Item
          name="short_name"
          label="Short Name"
          rules={[
            {
              required: true,
              message: 'Please input the Short Name!',
            },
          ]}
        >
          <Input
            allowClear
            style={{
              width: '450px',
            }}
          />
        </Form.Item>
        <Form.Item
          name="allow_decimal"
          label="Allowed Decimal"
          rules={[
            {
              required: true,
              message: 'Please input the Allowed Decimal!',
            },
          ]}
        >
          <InputNumber
            allowClear
            style={{
              width: '450px',
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateUnitModel;
