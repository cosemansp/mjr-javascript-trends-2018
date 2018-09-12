<template>
    <div>
        <h1>Web Component</h1>
        <p>Dynamic prop value: {{myProp}}</p>
    </div>
</template>

<script>
export default {
  props: ['myProp'],
};
</script>
