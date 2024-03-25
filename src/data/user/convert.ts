import {
  USER_ITEM_DATA_RAW_INTER,
  USER_ITEM_DATA_INTER,
  USER_ITEM_LIST_DATA_RAW_INTER,
  USER_ITEM_LIST_DATA_INTER,
} from './constant';

export const convertUser = (
  user: USER_ITEM_DATA_RAW_INTER,
): USER_ITEM_DATA_INTER => {
  return {
    ...user,
  };
};

export const convertUserList = (
  userList: USER_ITEM_LIST_DATA_RAW_INTER,
): USER_ITEM_LIST_DATA_INTER => {
  return {
    list: userList.list?.map((user: USER_ITEM_DATA_RAW_INTER) => {
      return convertUser(user);
    }),
    isEmpty: !userList.list?.length,
  };
};
