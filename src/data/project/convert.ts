import { SELECT_OPTION_ITEM_DATA } from '../../common/select';
import {
  PROJECT_ITEM_DATA_RAW_INTER,
  PROJECT_ITEM_DATA_INTER,
  PROJECT_ITEM_LIST_DATA_RAW_INTER,
  PROJECT_ITEM_LIST_DATA_INTER,
} from './constant';

export const convertProject = (
  project: PROJECT_ITEM_DATA_RAW_INTER,
): PROJECT_ITEM_DATA_INTER => {
  return {
    ...project,
  };
};

export const convertProjectList = (
  projectList: PROJECT_ITEM_LIST_DATA_RAW_INTER,
): PROJECT_ITEM_LIST_DATA_INTER => {
  return {
    list: projectList.list?.map((project: PROJECT_ITEM_DATA_RAW_INTER) => {
      return convertProject(project);
    }),
    isEmpty: !projectList.list?.length,
  };
};

export const convertProjectListToSelect = (
  data: PROJECT_ITEM_LIST_DATA_INTER,
) => {
  const newList: SELECT_OPTION_ITEM_DATA[] = [];
  data.list.map((item: PROJECT_ITEM_DATA_INTER) => {
    newList.push({ value: item.id, label: item.name });
  });

  return newList;
};
