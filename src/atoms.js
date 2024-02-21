import { atom, selector } from 'recoil';

export const wonState = atom({
  key: 'wonState',
  default: 0,
});

export const dollorState = selector({
  key: 'dollorState',
  get: ({ get }) => {
    const won = get(wonState);
    return won / 1400;
  },
  set: ({ set }, dollor) => set(wonState, dollor * 1400),
});
