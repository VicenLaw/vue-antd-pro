<template>
  <Exception :type="500"></Exception>
</template>

<script>
import { Exception } from '../../components/Exception';

export default {
  name: 'page500',
  components: {
    Exception,
  },
};
</script>
