
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
  }
}));ne