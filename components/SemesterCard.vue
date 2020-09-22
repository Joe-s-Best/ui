<template>
  <div>
    <template v-for="sem in semesterInfo">
      <a-col v-bind:key="sem.id" :span="12">
        <a-card class="course-card" :bordered="false">
          <div class="card-header">
            {{ sem.semester }}
          </div>
          <a-divider class="close-vertical" />
          <a-row style="font-size: 1.12vw">
            <a-col :span="12">Course</a-col>
            <a-col style="text-align: center" :span="12">Credits</a-col>
          </a-row>
          <a-divider class="close-vertical" />
          <template v-for="course in sem.courses">
            <a-row v-bind:key="course.key">
              <a-col :span="12">{{ course.name }}</a-col>
              <a-col style="text-align: center" :span="12">
                {{ course.credits }}
              </a-col>
            </a-row>
          </template>
        </a-card>
      </a-col>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SemesterCard',
  props: {
    semesterInfo: {
      type: Array,
      default: () => [
        {
          id: 1,
          semester: 'Fall 2020',
          courses: [{ key: '1', name: 'EE 160', credits: '3' }],
        },
      ],
    },
  },
}
</script>

<style scoped>
.course-card {
  color: #fafaff;
  font-family: 'Lexend Deca, sans-serif';
  background-color: #273469;
  border-radius: 15px;
}

.card-header {
  font-family: 'Libre Franklin', sans-serif;
  font-size: 1.33vw;
  margin-top: -10px;
}

.close-vertical {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
