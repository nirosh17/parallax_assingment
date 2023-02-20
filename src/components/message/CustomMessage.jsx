import { message } from 'antd';

export const success = (alart) => {
  message.success({
    style: { fontSize: '16px' },
    content: alart,
  });
};

export const error = (alart) => {
  message.error({
    style: { fontSize: '16px' },
    content: alart,
  });
};

export const warning = (alart) => {
  message.warning(alart);
};
