
import React from 'react';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlusIcon, Trash2Icon, CodeIcon } from 'lucide-react';

interface SkillItem {
  id: string;
  name: string;
}

interface SkillsSectionProps {
  skills: SkillItem[];
  onArrayInputChange: (index: number, field: string, value: string) => void;
  onAddItem: () => void;
  onRemoveItem: (index: number) => void;
}

export function SkillsSection({ 
  skills, 
  onArrayInputChange, 
  onAddItem, 
  onRemoveItem 
}: SkillsSectionProps) {
  return (
    <>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <CodeIcon className="h-5 w-5 mr-2" />
            <span>Skills</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={onAddItem}
          >
            <PlusIcon className="h-3.5 w-3.5 mr-1" /> Add Skill
          </Button>
        </CardTitle>
        <CardDescription>List your professional skills and competencies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            skill.name && (
              <Badge 
                key={skill.id} 
                variant="secondary" 
                className="px-3 py-1 text-xs flex items-center gap-1"
              >
                {skill.name}
                <button 
                  onClick={() => onRemoveItem(index)} 
                  className="text-gray-500 hover:text-gray-700 ml-1"
                >
                  ×
                </button>
              </Badge>
            )
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={skill.id} className="space-y-2">
              <Label htmlFor={`skill-${index}`} className="sr-only">Skill</Label>
              <div className="flex items-center space-x-2">
                <Input 
                  id={`skill-${index}`} 
                  value={skill.name} 
                  onChange={(e) => onArrayInputChange(index, 'name', e.target.value)}
                  placeholder="Enter a skill (e.g., JavaScript)"
                  className="flex-1"
                />
                {index > 2 && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onRemoveItem(index)}
                    className="h-8 px-2 text-destructive hover:text-destructive"
                  >
                    <Trash2Icon className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </>
  );
}
