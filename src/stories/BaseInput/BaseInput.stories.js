import BaseInput from "./BaseInput.vue";

export default {
  title: "Howie/BaseInput",
  component: BaseInput,
  argTypes: {},
};

const BaseTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-bind="$props" v-model="value" :is-valid.sync="isValid" />
   `,
});

const EmailTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-model="value" :label="label" :is-valid.sync="isValid" :rules="rules"  />
   `,
});

const NumberTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-model="value" :label="label" :is-valid.sync="isValid" :rules="rules" type="number"  />
   `,
});

const CompareTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
    <div>
      <base-input v-bind="$props" v-model="value" :is-valid.sync="isValid" @onKeyup="compareHandle" @onBlur="compareHandle" />
      <base-input v-bind="$props" :label="label2" :placeholder="placeholder2" :error-message="confirmPassword.errorMessage" v-model="confirmPassword.value" :is-valid.sync="confirmPassword.isValid" @onKeyup="compareHandle" @onBlur="compareHandle" />
    </div>
   `,
  data() {
    return {
      confirmPassword: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
    };
  },
  methods: {
    compareHandle() {
      if (this.value === this.confirmPassword.value) {
        this.confirmPassword.errorMessage = "";
        this.confirmPassword.isValid = true;
      } else {
        this.confirmPassword.errorMessage = "密碼不一致";
        this.confirmPassword.isValid = false;
      }
    },
  },
});

const UpperCaseTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-model="value" :label="label" :is-valid.sync="isValid" upper-case />
   `,
});

const NotRequiredTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-model="value" :label="label" :is-valid.sync="isValid" not-required />
   `,
});

const MultiLineTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-model="value" :label="label" :is-valid.sync="isValid" multi-line />
   `,
});

export const Base = BaseTemplate.bind({});
Base.args = {
  label: "帳號",
  placeholder: "請輸入帳號",
  rules: {
    min: 6,
    max: 15,
  },
};

export const Email = EmailTemplate.bind({});
Email.args = {
  label: "信箱",
  placeholder: "請輸入信箱",
  rules: {
    limit: "mail",
  },
};

export const Number = NumberTemplate.bind({});
Number.args = {
  label: "金額",
  placeholder: "請輸入金額",
  rules: {
    limit: "number",
  },
};

export const Compare = CompareTemplate.bind({});
Compare.args = {
  label: "密碼",
  placeholder: "請輸入密碼",
  rules: {
    min: 6,
    max: 20,
  },
  type: "password",
  label2: "確認密碼",
  placeholder2: "請再次輸入密碼",
};

export const UpperCase = UpperCaseTemplate.bind({});
UpperCase.args = {
  label: "英文名",
};

export const NotRequired = NotRequiredTemplate.bind({});
NotRequired.args = {
  label: "Line",
};

export const MultiLine = MultiLineTemplate.bind({});
MultiLine.args = {
  label: "帳號",
};
