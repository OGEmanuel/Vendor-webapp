import { BASE_PATH as MainBasePath } from './vendor/base';

export let ServerPath = MainBasePath;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  console.log('is development');
  console.log(ServerPath);
} else {
  // production code
  console.log('is production');
  ServerPath = import.meta.env.VITE_CORE_SERVICE_HOST;
  console.log(ServerPath);
}

export default {};
