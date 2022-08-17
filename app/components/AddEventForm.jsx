import { Form } from "@remix-run/react";
export default function AddEventForm({ data }) {
  return (
    <Form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      method="post"
      encType="multipart/form-data"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title:
        </label>
        <input
          id="title"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="title"
          type="text"
          placeholder="Title"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
          Image
        </label>
        <input
          id="image"
          type="file"
          name="image"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
          Date
        </label>
        <input
          id="date"
          type="date"
          name="date"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="description"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          name="action"
          value="update"
        >
          Submit
        </button>
      </div>
    </Form>
  );
}
