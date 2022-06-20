import React, { memo, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SUITE_TYPES } from 'src/consts/suite-types';
import { CATEGORIES } from 'src/consts/categories';
import BenchmarkSuite from 'src/components/Suites/BenchmarkSuite';
import CodeListingSuite from 'src/components/Suites/CodeListingSuite';
import ComponentSuite from 'src/components/Suites/ComponentSuite';
import PageWithSidebar from 'src/components/Page/PageWithSidebar';
import Sidebar from './Sidebar';

const Page = memo(({
  categoryId,
  exampleId,
}) => {
  const history = useHistory();
  const category = CATEGORIES.find(({ id }) => id === categoryId);

  let example = category.examples.find(({ id }) => id === exampleId);
  const isConfigNotFound = !example;

  if (!example) {
    example = category.examples[0];
  }

  useLayoutEffect(() => {
    if (isConfigNotFound) {
      history.replace(`/${categoryId}/${example.id}`);
    }
  }, [categoryId, example, history, isConfigNotFound]);

  const {
    id,
    title,
    description,
    suites = [],
  } = example;

  return (
    <PageWithSidebar
      title={title}
      description={description}
      sidebar={<Sidebar categoryId={categoryId} />}
    >
      {suites.map((suite) => {
        if (suite.type === SUITE_TYPES.benchmark) {
          return (
            <BenchmarkSuite
              key={`${id}_${suite.id}`}
              id={suite.id}
              title={suite.title}
              benchmarks={suite.benchmarks}
            />
          );
        }

        if (suite.type === SUITE_TYPES.codeListing) {
          return (
            <CodeListingSuite
              key={`${id}_${suite.id}`}
              id={suite.id}
              title={suite.title}
              listings={suite.listings}
            />
          );
        }

        if (suite.type === SUITE_TYPES.component) {
          return (
            <ComponentSuite
              key={`${id}_${suite.id}`}
              id={suite.id}
              title={suite.title}
              component={suite.component}
            />
          );
        }

        return null;
      })}
    </PageWithSidebar>
  );
});

export default Page;
