<template>
  <p>FormWithCheckboxAndRadioButton</p>
  <div class="main">
    <div class="col-md-12">
      <input type="text" name="name" id="name" placeholder="Enter your name" v-model="formData.name" />
    </div>
    <div class="col-md-12">
      <input type="email" name="email" id="email" placeholder="Enter Your Email" v-model="formData.email" />
    </div>
    <div class="col-md-12">
      <p>select your hobies</p>
      <label for="Gardening">Gardening</label>
      <input type="checkbox" id="Gardening" value="Gardening" name="Gardening" v-model="formData.hobies" /><br /><br />
      <label for="Dance">Dance</label>
      <input type="checkbox" id="Dance" value="Dance" name="Dance" v-model="formData.hobies" /><br /><br />
      <label for="Painting">Painting</label>
      <input type="checkbox" id="Painting" value="Painting" name="Painting" v-model="formData.hobies" /><br /><br />
      <label for="Sewing">Sewing</label>
      <input type="checkbox" id="Sewing" value="Sewing" name="Sewing" v-model="formData.hobies" /><br /><br />
      <label for="Woodworking">Woodworking</label>
      <input
        type="checkbox"
        id="Woodworking"
        value="Woodworking"
        name="Woodworking"
        v-model="formData.hobies"
      /><br /><br />
      <label for="Creative writing">Creative writing</label>
      <input
        type="checkbox"
        id="Creative writing"
        value="Creative writing"
        name="Creat ive writing"
        v-model="formData.hobies"
      />
    </div>
    <div class="col-md-12">
      <p>select gender</p>
      <label for="Genderfluid">Genderfluid</label>
      <input type="radio" id="Genderfluid" value="Genderfluid" name="gender" v-model="formData.gender" /><br />
      <br />
      <label for="Cisgender">Cisgender</label>
      <input type="radio" id="Cisgender" value="Cisgender" name="gender" v-model="formData.gender" /><br />
      <br />
      <label for="Transgender">Transgender</label>
      <input type="radio" id="Transgender" value="Transgender" name="gender" v-model="formData.gender" /><br />
      <br />
      <label for="Agender">Agender</label>
      <input type="radio" id="Agender" value="Agender" name="gender" v-model="formData.gender" /><br />
      <br />
      <label for="Bigender">Bigender</label>
      <input type="radio" id="Bigender" value="Bigender" name="gender" v-model="formData.gender" /><br />
      <br />
      <label for="Genderqueer">Genderqueer</label>
      <input type="radio" id="Genderqueer" value="Genderqueer" name="gender" v-model="formData.gender" /><br />
      <br />
      <label for="Nonbinary">Nonbinary</label>
      <input type="radio" id="Nonbinary" value="Nonbinary" name="gender" v-model="formData.gender" /><br />
      <br />
      <label for="Demigender">Demigender</label>
      <input type="radio" id="Demigender" value="Demigender" name="gender" v-model="formData.gender" /><br />
      <br />
      <label for="Gender variant">Gender variant</label>
      <input type="radio" id="Gender variant" value="Gender variant" name="gender" v-model="formData.gender" /><br />
      <br />
    </div>
    <div class="col-md-">
      <button v-on:click="handleSubmit">submit data</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormWithCheckboxAndRadioButton',
  data() {
    return {
      formData: {
        name: null,
        email: null,
        hobies: [],
        gender: null
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('formData', this.formData);
    }
  }
};
</script>