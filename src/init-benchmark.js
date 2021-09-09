import _ from 'lodash';
import process from 'process';

const benchmark = require('benchmark');
const Benchmark = benchmark.runInContext({ _, process });
window.Benchmark = Benchmark;
