import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  model() {
    return this.modelFor("adminPlugins.discourse-ai.ai-personas");
  },
});
