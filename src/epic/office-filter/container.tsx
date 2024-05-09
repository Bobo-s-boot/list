import React from 'react';

import { Component } from './component';

export const Container: React.FC<{
  project: string;
  setProject: Function;
  setType: Function;
  search: string;
  setSearch: Function;
  type: any;
}> = ({ project, setProject, setType, search, setSearch, type }) => {
  return (
    <Component
      project={project}
      setProject={setProject}
      setType={setType}
      search={search}
      setSearch={setSearch}
      type={type}
    />
  );
};
