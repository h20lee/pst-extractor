import { DescriptorIndexNode } from '../DescriptorIndexNode/DescriptorIndexNode.class'
import { PSTFile } from './../PSTFile/PSTFile.class'
import { PSTObject } from './../PSTObject/PSTObject.class'

export class PSTMessageStore extends PSTObject {
  /**
   * Creates an instance of PSTMessageStore.
   * Not much use other than to get the "name" of the PST file.
   * @param {PSTFile} pstFile
   * @param {DescriptorIndexNode} descriptorIndexNode
   * @memberof PSTMessageStore
   */
  constructor(pstFile: PSTFile, descriptorIndexNode: DescriptorIndexNode) {
    super(pstFile, descriptorIndexNode)
  }
}
