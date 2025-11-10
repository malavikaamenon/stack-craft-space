import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, Folder } from "lucide-react";

const stats = [
  {
    label: "Total Projects",
    value: "12",
    icon: Folder,
    trend: "+2 this month",
  },
  {
    label: "Active Tasks",
    value: "47",
    icon: Clock,
    trend: "18 in progress",
  },
  {
    label: "Completed",
    value: "234",
    icon: CheckCircle2,
    trend: "+15 this week",
  },
  {
    label: "Team Members",
    value: "8",
    icon: Users,
    trend: "All active",
  },
];

export const DashboardStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card 
            key={stat.label} 
            className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <h3 className="text-3xl font-bold mt-2 bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.trend}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
