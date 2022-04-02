const $body = document.body;

const setBodyOverflow = (): void => {
  $body.classList.add('overflow-hidden');
};

const removeBodyOverflow = (): void => {
  $body.classList.remove('overflow-hidden');
};

type OverflowBodyReturn = {
  setBodyOverflow: typeof setBodyOverflow;
  removeBodyOverflow: typeof removeBodyOverflow;
};

export const useOverflowBody = (): OverflowBodyReturn => {
  return { setBodyOverflow, removeBodyOverflow };
};
