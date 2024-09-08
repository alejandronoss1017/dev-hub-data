import { Module } from '@nestjs/common'
import { TestmodResolver } from './testmod.resolver'

@Module({
  providers: [TestmodResolver]
})
export class TestmodModule {}
