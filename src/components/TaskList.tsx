import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertCircle } from "lucide-react";

interface Task {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  completed: boolean;
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Design new dashboard layout",
    priority: "high",
    dueDate: "Today",
    completed: false,
  },
  {
    id: "2",
    title: "Update API documentation",
    priority: "medium",
    dueDate: "Tomorrow",
    completed: false,
  },
  {
    id: "3",
    title: "Review pull requests",
    priority: "high",
    dueDate: "Today",
    completed: true,
  },
  {
    id: "4",
    title: "Team sync meeting",
    priority: "low",
    dueDate: "Dec 15",
    completed: false,
  },
];

const priorityColors = {
  high: "bg-destructive text-destructive-foreground",
  medium: "bg-accent text-accent-foreground",
  low: "bg-muted text-muted-foreground",
};

export const TaskList = () => {
  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Recent Tasks
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <Checkbox
              checked={task.completed}
              className="mt-0.5"
            />
            <div className="flex-1 min-w-0">
              <p
                className={`font-medium ${
                  task.completed ? "line-through text-muted-foreground" : ""
                }`}
              >
                {task.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Badge
                  className={`${priorityColors[task.priority]} text-xs`}
                  variant="secondary"
                >
                  {task.priority}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  {task.dueDate === "Today" && (
                    <AlertCircle className="h-3 w-3" />
                  )}
                  {task.dueDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
