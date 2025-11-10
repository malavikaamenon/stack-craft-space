import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  team: string[];
  status: "active" | "planning" | "completed";
}

const statusColors = {
  active: "bg-primary text-primary-foreground",
  planning: "bg-accent text-accent-foreground",
  completed: "bg-muted text-muted-foreground",
};

export const ProjectCard = ({
  title,
  description,
  progress,
  dueDate,
  team,
  status,
}: ProjectCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50 hover:border-primary/30">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge className={statusColors[status]} variant="secondary">
            {status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{dueDate}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div className="flex -space-x-2">
              {team.map((member, index) => (
                <Avatar key={index} className="h-7 w-7 border-2 border-card">
                  <AvatarFallback className="text-xs bg-gradient-primary text-primary-foreground">
                    {member}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
