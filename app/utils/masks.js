import emailMask from 'text-mask-addons/dist/emailMask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const email = emailMask;

export const mobile = createNumberMask({
  prefix: '',
  includeThousandsSeparator: false,
});

export const price = createNumberMask({
  prefix: '',
  allowDecimal: true,
  includeThousandsSeparator: false,
});

export const quantity = createNumberMask({
  prefix: '',
  includeThousandsSeparator: false,
});

export const quantityWithDecimal = createNumberMask({
  prefix: '',
  allowDecimal: true,
  includeThousandsSeparator: false,
});
