import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Label } from './types/label.entity';
import { CreateLabelDTO } from './dtos/create-label.dto';
import { isHexColor } from 'class-validator';

@Injectable()
export class LabelsService {
  constructor(
    @InjectRepository(Label)
    private labelRepository: Repository<Label>,
  ) {}

  // Creates a new label with given CreateLabelDTO
  async createLabel(labelDto: CreateLabelDTO): Promise<Label> {
    // should throw an exception if name field is null
    // should throw an exception if color field is null
    // should throw an exception if color field is not a valid hex color
  }

  // Retrieves all labels
  async getAllLabels(): Promise<Label[]> {
  }

  // Deletes a label by its ID
  async deleteLabel(
    labelId: number,
  ): Promise<{ success: boolean; message: string }> {
    // should throw an exception if label with given ID does not exist
  }

  // Updates a label by its ID with given Partial<CreateLabelDTO>
  async updateLabel(
    labelId: number,
    updateLabelDto: Partial<CreateLabelDTO>,
  ): Promise<Label> {
    // should throw an exception if no fields are provided for update
    // should throw an exception if label with given ID does not exist
    // should throw an exception if color field (when given) is not a valid hex color
  }
}
