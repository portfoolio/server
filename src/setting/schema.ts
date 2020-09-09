import mongooseSchema from 'src/core/util/mongooseSchema';

export const settingSchema = {
  siteTitle: {
    type: String,
    default: 'Djordje Stojiljkovic'
  },
  siteDescription: {
    type: String,
    default: ''
  },

  favicon: String,

  showCounter: {
    type: Boolean,
    default: true,
  },

  showAbout: {
    type: Boolean,
    default: true,
  },

  showService: {
    type: Boolean,
    default: true,
  },

  showJourney: {
    type: Boolean,
    default: true,
  },

  showProject: {
    type: Boolean,
    default: true,
  },

  showTestimonial: {
    type: Boolean,
    default: true,
  },

  showTechnology: {
    type: Boolean,
    default: true,
  },

  showBlog: {
    type: Boolean,
    default: true,
  },

  showContact: {
    type: Boolean,
    default: true,
  },

  appearance: {
    type: String,
    default: 'Product "dark"',
  }
};

export const SettingSchema = mongooseSchema(settingSchema);
