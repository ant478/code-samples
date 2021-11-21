import _ from 'lodash';
import process from 'process';

const _Benchmark = require('benchmark');
const Benchmark = _Benchmark.runInContext({ _, process });

window.Benchmark = Benchmark;
