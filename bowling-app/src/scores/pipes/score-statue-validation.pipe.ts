// import {
//   ArgumentMetadata,
//   BadRequestException,
//   PipeTransform,
// } from '@nestjs/common';
// import { ScoreStatus } from '../score-status.enum';

// export class ScoreStatusValidationPipe implements PipeTransform {
//   readonly StatusOptions = [ScoreStatus.OFFICIAL, ScoreStatus.UNOFFICIAL];

//   transform(value: any) {
//     // value: 처리된 값
//     // metadata: 인자에 대한 메타데이터
//     value = value.toUpperCase();
//     if (!this.isStatusValid(value)) {
//       throw new BadRequestException(`${value} isn't in the status options`);
//     }

//     return value;
//   }

//   private isStatusValid(status: any) {
//     const index = this.StatusOptions.indexOf(status);
//     return index !== -1;
//   }
// }
