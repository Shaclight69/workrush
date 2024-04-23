import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const task = await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR DELETING TASK: ", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}

// export async function PUT(req: Request) {
//   try {
//     const { userId } = auth();
//     const { isCompleted, id } = await req.json();

//     if (!userId) {
//       return NextResponse.json({ error: "Unauthorized", status: 401 });
//     }

//     const task = await prisma.task.update({
//       where: {
//         id,
//       },
//       data: {
//         isCompleted,
//       },
//     });

//     return NextResponse.json(task);
//   } catch (error) {
//     console.log("ERROR UPDATING TASK: ", error);
//     return NextResponse.json({
//       error: "Error updating task",
//       status: 500,
//     });
//   }
// }

export async function PUT(
  req: Request,

  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;
    const { title, description, date, completed, important } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }
    const task = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({
      error: "Error updating task",
      status: 500,
    });
  }
}

// export async function GET(req: Request) {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return NextResponse.json({ error: "Unauthorized", status: 401 });
//     }

//     const tasks = await prisma.task.findMany({
//       where: {
//         userId,
//       },
//     });

//     return NextResponse.json(tasks);
//   } catch (error) {
//     console.log("ERROR GETTING TASKS: ", error);
//     return NextResponse.json({
//       error: "Error getting task",
//       status: 500,
//     });
//   }
// }

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR GETTING TASKS: ", error);
    return NextResponse.json({
      error: "Error getting task",
      status: 500,
    });
  }
}
