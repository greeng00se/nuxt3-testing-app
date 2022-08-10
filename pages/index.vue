<template>
  <v-container align="center">
    <v-card max-width="480px">
      <v-card-item>
        <Form as="v-form" :validation-schema="schema" @submit="onSubmit">
          <!--  -->
          <TextFieldWithValidation
              v-model="name"
              name="name"
              label="이름"
            />
          <TextFieldWithValidation
              v-model="age"
              type="number"
              name="age"
              label="나이"
            />
          <v-btn type="submit">검증</v-btn>
        </Form>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { Form, Field } from "vee-validate";
import * as yup from "yup";

const name = ref("");
const age = ref(0);

const schema = yup.object({
  name: yup.string().required().label("이름").min(5),
  age: yup.number().required().label("나이").min(5),
});

const onSubmit = () => {
  console.log("hello");
};
</script>