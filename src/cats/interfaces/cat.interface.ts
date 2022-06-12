import { Document } from 'mongoose';
import {CountryDetails} from "../dto/update-user.dto";

export interface Cat extends Document {
  readonly name: string;
  readonly countries: CountryDetails[]
}