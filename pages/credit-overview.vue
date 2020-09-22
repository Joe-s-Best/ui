<template>
  <div>
    <a-row>
      <a-col :span="12">
        <h1>Current Progress</h1>
        <div class="info-box">
          <a-row class="box-header">
            <a-col style="text-align: left" :span="6">Requirement</a-col>
            <a-col :span="6">Credits Required</a-col>
            <a-col :span="6">Credits In-Progress</a-col>
            <a-col :span="6">Credits Approved</a-col>
          </a-row>
          <template v-for="current in currentProg">
            <a-row v-bind:key="current.name">
              <a-col style="text-align: left" :span="6">
                {{ current.name }}
              </a-col>
              <a-col :span="6">{{ current.reqCredit }}</a-col>
              <a-col :span="6">{{ current.progCredit }}</a-col>
              <a-col :span="6">{{ current.appCredit }}</a-col>
            </a-row>
          </template>
          <a-row
            type="flex"
            justify="start"
            align="bottom"
            style="text-align: left"
          >
            <a-col :span="24" style="padding-top: 10vw">
              Total Completed Credits: 80<br />
              Total Needed Credits: 120<br />
              Expected Grad Semester: Spring 2022<br />
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :span="12">
        <h1>Recommended Path</h1>
        <a-row style="margin-right: 20px" :gutter="[24, 24]">
          <SemesterCard v-bind:semester-info="testSemesters" />
        </a-row>
      </a-col>
    </a-row>
    <a-divider />
    <h1 style="text-align: center">Finished Credit Breakdown</h1>
    <div class="info-box" style="text-align: left">
      <div class="box-header">Chemistry Requirement</div>
      <a-divider class="close-vertical" />
      <a-row>
        <a-col :span="4">Chem 161</a-col>
        <a-col :span="5">3 Credits Max</a-col>
        <a-col :span="5">3 Credits Awarded</a-col>
        <a-col :span="4">Fall 2020</a-col>
        <a-col :span="6">Approved By: Frendy Lio</a-col>
      </a-row>
      <a-row>
        <a-col :span="4">Chem 162</a-col>
        <a-col :span="5">3 Credits Max</a-col>
        <a-col :span="5">3 Credits Awarded</a-col>
        <a-col :span="4">Spring 2021</a-col>
        <a-col :span="6">Approved By: Frendy Lio</a-col>
      </a-row>
      <div style="margin-top: 40px" class="box-header">Math Requirement</div>
      <a-divider class="close-vertical" />
      <a-row>
        <a-col :span="4">Math 241</a-col>
        <a-col :span="5">3 Credits Max</a-col>
        <a-col :span="5">3 Credits Awarded</a-col>
        <a-col :span="4">Fall 2020</a-col>
        <a-col :span="6">Approved By: Frendy Lio</a-col>
      </a-row>
      <a-row>
        <a-col :span="4">Math 242</a-col>
        <a-col :span="5">3 Credits Max</a-col>
        <a-col :span="5">3 Credits Awarded</a-col>
        <a-col :span="4">Spring 2021</a-col>
        <a-col :span="6">Approved By: Frendy Lio</a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import SemesterCard from '../components/SemesterCard.vue'
import current from '../assets/json/current.json'

export default {
  name: 'CreditOverview',
  components: {
    SemesterCard,
  },
  data() {
    return {
      testSemesters: [
        {
          id: 1,
          semester: 'Fall 2020',
          courses: [
            { key: '1', name: 'EE 160', credits: '3' },
            { key: '2', name: 'EE 211', credits: '3' },
            { key: '3', name: 'EE 211L', credits: '1' },
            { key: '4', name: 'Math 243', credits: '3' },
          ],
        },
        {
          id: 2,
          semester: 'Spring 2021',
          courses: [
            { key: '1', name: 'EE 160', credits: '3' },
            { key: '2', name: 'EE 211', credits: '3' },
            { key: '3', name: 'EE 211L', credits: '1' },
            { key: '4', name: 'Math 243', credits: '3' },
          ],
        },
        {
          id: 3,
          semester: 'Fall 2021',
          courses: [
            { key: '1', name: 'EE 160', credits: '3' },
            { key: '2', name: 'EE 211', credits: '3' },
            { key: '3', name: 'EE 211L', credits: '1' },
            { key: '4', name: 'Math 243', credits: '3' },
          ],
        },
        {
          id: 4,
          semester: 'Spring 2022',
          courses: [
            { key: '1', name: 'EE 160', credits: '3' },
            { key: '2', name: 'EE 211', credits: '3' },
            { key: '3', name: 'EE 211L', credits: '1' },
            { key: '4', name: 'Math 243', credits: '3' },
          ],
        },
      ],
      currentProg: current,
    }
  },
}
</script>

<style scoped>
.info-box {
  font-family: 'Lexend Deca, sans-serif';
  color: #fafaff;
  background-color: #273469;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 25px;
  padding: 10px 10px 10px 10px;
  text-align: center;
  min-height: 20vw;
  font-size: 1.15vw;
}

.box-header {
  font-family: 'Libre Franklin', sans-serif;
  font-size: 1.33vw;
  letter-spacing: -1.75px;
}

h1 {
  font-family: 'Lexend Deca', sans-serif;
  color: #efd9ff;
  font-size: 2.2vw;
  margin-left: 10px;
  margin-top: 20px;
  letter-spacing: -3px;
  padding-bottom: 0px;
  margin-bottom: 5px;
}

.close-vertical {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
