<template>
  <div>
    <div class="flex p-4">
      <div class="w-1/2">
        <h1>Current Progress</h1>
        <div
          class="shadow-md rounded p-8 text"
          style="background-color: #273469"
        >
          <table class="w-full text-lg">
            <tr class="text-gray-500">
              <th>Requirement</th>
              <th>Credits Required</th>
              <th>Credits In Progress</th>
              <th>Credits Approved</th>
            </tr>
            <tr v-for="current in currentProg" :key="current.name">
              <td>{{ current.name }}</td>
              <td>{{ current.reqCredit }}</td>
              <td>{{ current.progCredit }}</td>
              <td>{{ current.appCredit }}</td>
            </tr>
          </table>
          <br />
          <br />
          <table>
            <tr>
              <td class="text-gray-500 font-bold pr-3">
                Total Finished Credits
              </td>
              <td>80</td>
            </tr>
            <tr>
              <td class="text-gray-500 font-bold pr-3">Total Needed Credits</td>
              <td>120</td>
            </tr>
            <tr>
              <td class="text-gray-500 font-bold pr-3">Expected Graduation</td>
              <td>Spring 2022</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="w-1/2 pl-2">
        <h1>Recommended Path</h1>
        <div class="flex flex-wrap">
          <div
            v-for="path in testSemesters"
            :key="path.semester"
            class="w-1/4 shadow-md rounded p-4 text m-1"
            style="background-color: #273469"
          >
            <div class="text-lg">
              {{ path.semester }}
            </div>
            <br />
            <table class="w-full">
              <tr class="text-gray-500">
                <th>Course</th>
                <th>Credits</th>
              </tr>
              <tr v-for="course in path.courses" :key="course.key">
                <td>{{ course.name }}</td>
                <td>{{ course.credits }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <h1>Finished Credit Breakdown</h1>
      <div
        class="w-1/4 shadow-md rounded p-4 text m-1 w-full"
        style="background-color: #273469"
      >
        <div class="text-xl">Chemistry Requirement</div>
        <table class="w-full text-lg">
          <tr class="text-gray-500">
            <th>Class</th>
            <th>Max Credits</th>
            <th>Awarded Credits</th>
            <th>Semester Completed</th>
            <th>Approved By</th>
          </tr>
          <tr>
            <td>Chem 161</td>
            <td>3</td>
            <td>3</td>
            <td>Fall 2020</td>
            <td>DEz3wejvFMRv8dmDRNrtbrokizbyYAz3tW</td>
          </tr>
          <tr>
            <td>Chem 162</td>
            <td>3</td>
            <td>3</td>
            <td>Fall 2021</td>
            <td>DEz3wejvFMRv8dmDRNrtbrokizbyYAz3tW</td>
          </tr>
        </table>
        <br />
        <div class="text-xl">Math Requirement</div>
        <table class="w-full text-lg">
          <tr class="text-gray-500">
            <th>Class</th>
            <th>Max Credits</th>
            <th>Awarded Credits</th>
            <th>Semester Completed</th>
            <th>Approved By</th>
          </tr>
          <tr>
            <td>Math 241</td>
            <td>3</td>
            <td>3</td>
            <td>Fall 2020</td>
            <td>DEz3wejvFMRv8dmDRNrtbrokizbyYAz3tW</td>
          </tr>
          <tr>
            <td>Math 242</td>
            <td>3</td>
            <td>3</td>
            <td>Spring 2021</td>
            <td>DEz3wejvFMRv8dmDRNrtbrokizbyYAz3tW</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import current from '../assets/json/current.json'

export default {
  name: 'CreditOverview',
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

.text {
  font-family: 'Libre Franklin', sans-serif;
}
</style>
