import { scanList, updateScanList } from '@/services/ant-design-pro/api';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  FormInstance,
  ActionType,
  ProColumns,
  BetaSchemaForm,
  ProFormSwitch,
} from '@ant-design/pro-components';
import {
  PageContainer,
  ProTable,
  ProFormUploadDragger,
  ProFormColumnsType,
} from '@ant-design/pro-components';
import { Popconfirm, Image, Tooltip, Space } from 'antd';
import { Button, message } from 'antd';
import React, { useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: any) => {
  const hide = message.loading('正在添加');
  try {
    const result = await updateScanList({ ...fields });

    hide();
    if (result && result.code === 0) {
      message.success(result.msg);
      return true;
    } else {
      message.warn(result.msg);
      return false;
    }
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleEdit = async (fields: any) => {
  const hide = message.loading('正在更新');
  try {
    const result = await updateScanList({ ...fields });
    hide();
    if (result && result.code === 0) {
      message.success(result.msg);
      return true;
    } else {
      message.warn(result.msg);
      return false;
    }
  } catch (error) {
    hide();
    message.error('Update failed, please try again!');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (id: number) => {
  const hide = message.loading('正在删除');
  if (!id) return true;
  try {
    const result = await updateScanList({
      id,
    });
    hide();
    if (result && result.code === 0) {
      message.success(result.msg);
      return true;
    } else {
      message.warn(result.msg);
      return false;
    }
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, setModalVisible] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(true);

  const modalFormRef = useRef<FormInstance>();
  const handleModalVisible = (status: boolean) => {
    if (!status) modalFormRef?.current?.resetFields();
    setModalVisible(status);
  };

  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */

  const actionRef = useRef<ActionType>();

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProFormColumnsType<any>[] = [
    {
      hideInTable: true,
      hideInSearch: true,
      formItemProps: {
        hidden: true,
      },
      dataIndex: 'id',
      key: 'id',
    },
    {
      hideInTable: true,
      hideInSearch: true,
      // formItemProps: {
      //   hidden: true,
      // },
      dataIndex: 'file',
      key: 'file',
      renderFormItem: () => <ProFormUploadDragger name="files" label="拖拽上传" />,
      formItemProps() {
        if (isUpdate) {
          return { hidden: true };
        } else {
          return {};
        }
      },
    },
    {
      title: 'files',
      dataIndex: 'files',
      hideInSearch: true,
      hideInForm: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      render: (dom, entity) => {
        if (!dom) return;

        return (
          <Image.PreviewGroup>
            <Space>
              {Object.values(dom).map((item) => {
                return (
                  <Tooltip title={item.desc} key={`${item.path}`}>
                    <Image width={100} src={item.path} />
                  </Tooltip>
                );
              })}
            </Space>
          </Image.PreviewGroup>
        );
      },
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'desc',
      dataIndex: 'desc',
      hideInForm: true,
    },
    {
      title: 'status',
      dataIndex: 'status',
      valueType: 'select',
      hideInForm: true,
      // formItemProps: {
      //   hidden: true,
      // },
      valueEnum: {
        0: {
          color: 'blue',
          text: 'Processing',
        },
        1: {
          color: 'green',
          text: 'Success',
        },
        2: {
          color: 'red',
          text: 'Error',
        },
        3: {
          color: 'black',
          text: 'Selected',
        },
      },
    },
    {
      title: 'select',
      dataIndex: 'status',
      hideInSearch: true,
      valueType: 'switch',
      valueEnum: {
        0: {
          value: false,
        },
        1: {
          value: true,
        },
        2: {
          value: false,
        },
        3: {
          value: true,
        },
      },
      formItemProps() {
        if (isUpdate) {
          return {};
        } else {
          return { hidden: true };
        }
      },
      // renderFormItem: (schema, config, form) => {
      //   console.log(
      //     { schema, config, form },
      //     form.getFieldValue('status'),
      //     modalFormRef?.current?.getFieldValue('status'),
      //   );
      //   return <ProFormSwitch name="status" />;
      // },
    },
    // {
    //   title: 'selected',
    //   dataIndex: 'selected',
    //   hideInSearch: true,
    //   hideInTable: true,
    //   valueType: 'switch',
    //   formItemProps(form) {
    //     console.log(
    //       { form },
    //       form.getFieldValue('status'),
    //       modalFormRef?.current?.getFieldValue('status'),
    //     );
    //     if (modalFormRef?.current?.getFieldValue('status')) {
    //       return {};
    //     } else {
    //       return { hidden: true };
    //     }
    //   },
    //   // renderFormItem: (schema, config, form) => {
    //   //   console.log(
    //   //     { schema, config, form },
    //   //     form.getFieldValue('status'),
    //   //     modalFormRef?.current?.getFieldValue('status'),
    //   //   );
    //   //   return form.getFieldValue('status') ? <ProFormSwitch name="selected" /> : undefined;
    //   // },
    // },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <Button
          icon={<EditOutlined />}
          type="link"
          key="editable"
          onClick={() => {
            const { files, name, desc, status } = record;
            const selected = status === 3;
            setIsUpdate(true);
            handleModalVisible(true);
            setTimeout(() => {
              modalFormRef?.current?.setFieldsValue({ files, name, desc, status: selected });
            }, 0);
          }}
          disabled={record.status % 2 !== 1}
        />,
        // <a
        //   key="editable"
        //   onClick={() => {
        //     const { id, appKey, proxyIp, proxyPort } = record;
        //     handleModalVisible(true);
        //     setTimeout(() => {
        //       modalFormRef?.current?.setFieldsValue({ id, appKey, proxyIp, proxyPort });
        //     }, 0);
        //   }}
        // >
        //   编辑
        // </a>,
        <Popconfirm
          title="确认删除"
          onConfirm={async () => {
            const { id } = record;
            await handleRemove(id);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }}
          key="delete"
        >
          {/* <Button type="link">删除</Button> */}
          <Button icon={<DeleteOutlined />} danger type="text" />
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <BetaSchemaForm
        formRef={modalFormRef}
        onVisibleChange={handleModalVisible}
        visible={createModalVisible}
        layoutType="ModalForm"
        onFinish={async (values) => {
          const { id, name, desc, status } = values;
          if (!id) {
            const success = await handleAdd({ name, desc, status });
            if (success) {
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          } else {
            const success = await handleEdit({ id, name, desc, status });
            if (success) {
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }
        }}
        columns={columns as any}
      />
      <ProTable<any, any>
        headerTitle={intl.formatMessage({
          id: 'pages.appkeyTable.title',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setIsUpdate(false);
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        request={async (
          // 第一个参数 params 查询表单和 params 参数的结合
          // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
          params: T & {
            pageSize: number;
            current: number;
            name?: string;
            desc?: string;
            status?: string;
          },
          sort,
          filter,
        ) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          console.log({ params });
          const msg = await scanList({
            current: params.current,
            pageSize: params.pageSize,
            name: params.name,
            desc: params.desc,
            status: params.status,
          });
          return {
            data: msg.data,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: true,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: msg.total,
          };
        }}
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
