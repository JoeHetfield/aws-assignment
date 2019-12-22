import { defineMessages } from 'react-intl';

const prefix = 'User.ProfilePane.Kyc1Dialog';

const definedMessages = defineMessages({
  basicVerification: {
    id: `${prefix}.basicVerification`,
    description: '基本信息认证',
    defaultMessage: 'Basic information verification',
  },
  uploadInstruction: {
    id: `${prefix}.uploadInstruction`,
    description: '请确保照片的内容完整并清晰可见，仅支持 JPG 格式的图片文件，大小不超过2M',
    defaultMessage: 'Please make sure that the content of the photo is complete and clearly visible. Only supports image files in JPG format, and the size is not larger than 2M',
  },
  uploadIdFront: {
    id: `${prefix}.uploadIdFront`,
    description: '上传身份证正面照',
    defaultMessage: 'Front side photo of identity card',
  },
  uploadIdBack: {
    id: `${prefix}.uploadIdBack`,
    description: '上传身份证背面照',
    defaultMessage: 'Back side photo of identity card',
  },
  selectImage: {
    id: `${prefix}.selectImage`,
    description: '请选择图片',
    defaultMessage: 'Please Select Image',
  },
  confirmInformation: {
    id: `${prefix}.confirmInformation`,
    description: '确认基本信息',
    defaultMessage: 'Confirm Basic Verification Information',
  },
  fullname: {
    id: `${prefix}.fullname`,
    description: '姓名',
    defaultMessage: 'Full Name',
  },
  gender: {
    id: `${prefix}.gender`,
    description: '性别',
    defaultMessage: 'Gender',
  },
  IdNumber: {
    id: `${prefix}.IdNumber`,
    description: '身份证号码',
    defaultMessage: 'ID Number',
  },
  expiredDate: {
    id: `${prefix}.expiredDate`,
    description: '有效日期',
    defaultMessage: 'Expired Date',
  },
  submitInstruction: {
    id: `${prefix}.submitInstruction`,
    description: '身份认证一旦提交不可更改，您确定要提交基本信息认证吗？',
    defaultMessage: 'The identity information cannot be changed after been submitted, are you sure to submit a basic information certification ?',
  },
  succes: {
    id: `${prefix}.succes`,
    description: '基本信息认证通过',
    defaultMessage: 'Basic information verification succeed',
  },
});

export default definedMessages;
