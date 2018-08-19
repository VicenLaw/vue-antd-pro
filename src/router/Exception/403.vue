<template>
  <Exception :type="403"></Exception>
</template>

<script>
import { Exception } from '../../components/Exception';

export default {
  name: 'page403',
  components: {
    Exception,
  },
};
</script>
