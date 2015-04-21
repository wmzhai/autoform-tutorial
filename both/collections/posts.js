
Posts = new Mongo.Collection("posts");
Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Content"
  },
  category:{
    type: String,
    label: "Category",
    allowedValues: ['business', 'health', 'finance'],
    autoform:{
      options:[
        {label: "Business", value: "business"},
        {label: "Health", value: "health"},
        {label: "Finance", value: "finance"}
      ]
    }
  }
}));