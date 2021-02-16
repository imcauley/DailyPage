<template>
    <div>
        <v-textarea
            no-resize=true
            :value=text
        ></v-textarea>
    </div>
</template>

<script>


export default {
  name: 'Writing',

  components: {
  },

  data: () => ({
    text: "this is a test"
  }),
};
</script>
