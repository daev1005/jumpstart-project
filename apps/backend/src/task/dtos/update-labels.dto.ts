// should include a taskId (number) and non-empty array of numbers called labelIds
export class UpdateLabelsDTO {
    @IsNumber()
    taskId: number;

    @IsArray()
    @IsNotEmpty()
    @IsNumber({}, { each: true }
    labelIds: number[];
}