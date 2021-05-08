import BaseInput from "./BaseInput.vue";

export default {
  title: "Howie/BaseInput",
  component: BaseInput,
  argTypes: {
    custom: {
      control: { type: "select", options: ["base_input", "base_input_2"] },
    },
  },
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
      <base-input v-model="value" :label="label" :placeholder="placeholder" :is-valid.sync="isValid" :rules="rules" />
   `,
});

const NumberTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-model="value" :label="label" :placeholder="placeholder" :is-valid.sync="isValid" :rules="rules" type="number" />
   `,
});

const CompareTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
    <div>
      <base-input v-bind="$props" v-model="value" :is-valid.sync="isValid" @onKeyup="compareHandle" @onBlur="compareHandle" />
      <base-input v-bind="$props" :label="label2" :is-valid.sync="isValid2" :rules="rules2" :placeholder="placeholder2" :error-message="confirmPassword.errorMessage" v-model="confirmPassword.value" @onKeyup="compareHandle" @onBlur="compareHandle" />
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
      <base-input v-model="value" :label="label" />
   `,
});

const NoLabelTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-model="value"  />
   `,
});

const MultiLineTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-model="value" :label="label" multi-line />
   `,
});

const SecondStyleTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `
      <base-input v-model="value" :label="label" :custom="custom" />
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
    isRequired: true,
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
  isValid2: false,
  rules2: {
    min: 6,
    max: 20,
  },
};

export const UpperCase = UpperCaseTemplate.bind({});
UpperCase.args = {
  label: "英文名",
};

export const NotRequired = NotRequiredTemplate.bind({});
NotRequired.args = {
  label: "Line",
};

export const NoLabel = NoLabelTemplate.bind({});
NoLabel.args = {};

export const MultiLine = MultiLineTemplate.bind({});
MultiLine.args = {
  label: "帳號",
};

export const SecondStyle = SecondStyleTemplate.bind({});
SecondStyle.args = {
  label: "帳號",
  custom: "base_input_2",
};
