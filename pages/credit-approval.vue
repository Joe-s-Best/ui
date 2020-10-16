<template>
  <div>
    <div class="p-4 px-16">
      <div class="">
        <h1>Credits Requesting Approval</h1>
        <input
          id="password"
          class="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white h-16 text-lg"
          type="text"
          placeholder="Search Student Name / ID"
        />
        <br />
        <br />
        <div
          class="shadow-md rounded p-8 text"
          style="background-color: #273469"
        >
          <table class="w-full text-lg">
            <tr class="text-gray-500">
              <th>Student</th>
              <th>Course</th>
              <th>Credits</th>
              <th>Approved</th>
              <th>Manage</th>
            </tr>
            <tr>
              <td>D4xTEsTQHBfyMukoRtJWoNXGb47fq5so98 (Spencer Young)</td>
              <td>EE 416</td>
              <td>3</td>
              <td>Pending</td>
              <td>
                <a-icon type="check" style="color: #9ae6b4" />
                <a-icon
                  class="text-red-200"
                  type="close"
                  style="color: #feb2b2"
                />
              </td>
            </tr>
            <tr>
              <td>D4xTEsTQHBfyMukoRtJWoNXGb47fq5so98 (Spencer Young)</td>
              <td>EE 468</td>
              <td>3</td>
              <td>Pending</td>
              <td>
                <a-icon type="check" style="color: #9ae6b4" />
                <a-icon
                  class="text-red-200"
                  type="close"
                  style="color: #feb2b2"
                />
              </td>
            </tr>
            <tr>
              <td>D4xTEsTQHBfyMukoRtJWoNXGb47fq5so98 (Spencer Young)</td>
              <td>EE 351</td>
              <td>3</td>
              <td>Pending</td>
              <td>
                <a-icon type="check" style="color: #9ae6b4" />
                <a-icon
                  class="text-red-200"
                  type="close"
                  style="color: #feb2b2"
                />
              </td>
            </tr>
            <tr>
              <td>D4xTEsTQHBfyMukoRtJWoNXGb47fq5so98 (Spencer Young)</td>
              <td>EE 496</td>
              <td>3</td>
              <td>Pending</td>
              <td>
                <a-icon type="check" style="color: #9ae6b4" />
                <a-icon
                  class="text-red-200"
                  type="close"
                  style="color: #feb2b2"
                />
              </td>
            </tr>
            <tr>
              <td>DEz3wejvFMRv8dmDRNrtbrokizbyYAz3tW (Frendy Lio)</td>
              <td>EE 602</td>
              <td>3</td>
              <td>Approved</td>
              <td>
                <a-icon type="check" style="color: #9ae6b4" />
                <a-icon
                  class="text-red-200"
                  type="close"
                  style="color: #feb2b2"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreditApproval',
}
</script>

<style></style>
