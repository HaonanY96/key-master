import { Category, CategoryType, FunctionType } from '../types/common';

export const categories: Category[] = [
  // Platform
  {
    id: 'windows',
    name: 'Windows',
    type: CategoryType.PLATFORM,
    description: 'Windows platform shortcuts',
    order: 1
  },
  
  // System Categories
  {
    id: 'windows-system',
    name: 'System',
    type: CategoryType.SYSTEM,
    parentId: 'windows',
    description: 'Windows system shortcuts',
    order: 1
  },
  
  // Function Categories
  {
    id: 'windows-system-file',
    name: 'File Management',
    type: CategoryType.FUNCTION,
    functionType: FunctionType.FILE,
    parentId: 'windows-system',
    description: 'File operations shortcuts',
    order: 1
  },
  
  // Software Categories
  {
    id: 'windows-vscode',
    name: 'Visual Studio Code',
    type: CategoryType.SOFTWARE,
    parentId: 'windows',
    description: 'VS Code shortcuts',
    order: 2
  },
  
  // Software Function Categories
  {
    id: 'windows-vscode-editing',
    name: 'Editing',
    type: CategoryType.FUNCTION,
    functionType: FunctionType.TEXT,
    parentId: 'windows-vscode',
    description: 'VS Code editing shortcuts',
    order: 1
  }
]; 