import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

/**
 * The above function updates a topic in a MongoDB database with the provided new title and
 * description.
 * @param request - The `request` parameter is the HTTP request object that contains information about
 * the incoming request, such as headers, body, and URL parameters.
 * @returns a JSON response with a message "Topic updated" and a status code of 200.
 */
export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

/**
 * This JavaScript function retrieves a topic from a MongoDB database based on the provided ID and
 * returns it as a JSON response.
 * @param request - The `request` parameter is the incoming HTTP request object. It contains
 * information about the request, such as the HTTP method, headers, and body.
 * @returns The topic object is being returned as a JSON response with a status code of 200.
 */
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
