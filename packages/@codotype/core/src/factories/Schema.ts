import { v4 as uuidv4 } from "uuid";
import { Schema, Attribute, Relation } from "..";
import { SchemaSource } from "../schema";
import { TokenPluralization } from "../token";
import { ProjectConfiguration } from "../ProjectConfiguration";

// // // //

interface SchemaBuilderParams {
  id?: string;
  attributes: Attribute[];
  relations: Relation[];
  identifiers: TokenPluralization;
  source?: SchemaSource;
  locked?: boolean;
  removable?: boolean;
  configuration?: ProjectConfiguration;
  internalNote?: string;
}

export class SchemaBuilder implements Schema {
  id: string = uuidv4();
  attributes: Attribute[];
  relations: Relation[];
  identifiers: TokenPluralization;
  source: SchemaSource = SchemaSource.USER;
  locked: boolean = false;
  removable: boolean = true;
  configuration: ProjectConfiguration = {};
  internalNote: string = "";

  constructor(params: SchemaBuilderParams) {
    this.attributes = params.attributes;
    this.relations = params.relations;
    this.identifiers = params.identifiers;

    this.id = params.id || this.id;
    this.source = params.source || this.source;
    this.locked = params.locked !== undefined ? params.locked : this.locked;
    this.removable =
      params.removable !== undefined ? params.removable : this.removable;
    this.configuration = params.configuration || this.configuration;
    this.internalNote = params.internalNote || this.internalNote;
  }
}
