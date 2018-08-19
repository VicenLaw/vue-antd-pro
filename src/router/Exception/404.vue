<template>
  <Exception :type="404"></Exception>
</template>

<script>
import { Exception } from "../../components/Exception";

export default {
  name: "page404",
  components: {
    Exception,
  },
};
</script>
