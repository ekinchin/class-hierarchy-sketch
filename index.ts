import AvailableContainers from './containers';
import { IContainerType } from './IContainerType';

type AvailableContainersType = keyof typeof AvailableContainers;

function containerFactory(containerType: AvailableContainersType): IContainerType{
  return new AvailableContainers[containerType];
}

const containerA = containerFactory('ContainerTypeA');
console.log(containerA);

const containerB = containerFactory('ContainerTypeB');
console.log(containerB);
