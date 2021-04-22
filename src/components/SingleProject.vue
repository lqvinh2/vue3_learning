<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="isShowDetail = !isShowDetail" class="title">
        {{ project.title }}
      </h3>
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-icons">edit</span>
        </router-link>

        <span @click="DeleteProject" class="material-icons">delete</span>

        <span @click="ToogleComplete" class="material-icons tick">done</span>
      </div>
    </div>

    <div v-if="isShowDetail" class="details">
      {{ project.details }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  props: ["project"],

  data() {
    return {
      isShowDetail: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },

  methods: {
    DeleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },

    ToogleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => {
          this.$emit("complete", this.project.id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
.title {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}

/* completed projects */
.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}
</style>
