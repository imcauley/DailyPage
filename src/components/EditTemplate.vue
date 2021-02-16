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
  name: 'EditTemplate',

  data: () => ({
    text: "# This is the default template"
  }),
};
</script>
