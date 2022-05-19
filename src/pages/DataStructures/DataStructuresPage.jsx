import React, { memo, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageWithSidebar from 'src/components/PageWithSidebar';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES } from './consts/examples';
import DataStructuresSidebar from './components/DataStructuresSidebar';

const DataStructuresPage = memo(({
  match: {
    params: {
      exampleId,
    },
  },
}) => {
  const history = useHistory();
  let exampleConfig = EXAMPLES.find(({ id }) => id === exampleId);
  const isConfigNotFound = !exampleConfig;

  if (!exampleConfig) {
    exampleConfig = EXAMPLES[0];
  }

  useLayoutEffect(() => {
    if (isConfigNotFound) {
      history.replace(`/${CATEGORY_IDS.dataStructures}/${exampleConfig.id}`);
    }
  }, [exampleConfig, history, isConfigNotFound]);

  const { title: exampleTitle, description } = exampleConfig;

  return (
    <PageWithSidebar
      title={exampleTitle}
      description={description}
      sidebar={<DataStructuresSidebar />}
    />
  );
});

export default DataStructuresPage;
