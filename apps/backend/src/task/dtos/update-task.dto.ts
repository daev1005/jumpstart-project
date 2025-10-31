// should include an optional title (string), optional description (string), optional due date (Date), and optional category (TaskCategory)
export class UpdateTaskDTO {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsDate()
    @Transform(({ value }) => (value ? new Date(value)));
    dueDate?: Date;

    @IsOptional()
    @IsEnum(TaskCategory)
    category?: TaskCategory;
}