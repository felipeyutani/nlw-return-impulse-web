import { ChatTeardropDots }from 'phosphor-react'; //Biblioteca de Icones
// import { useState } from 'react';
import { Popover } from '@headlessui/react' //Biblioteca de Acessibilidade
import { WidgetForm } from './WidgetForm';

export function Widget() {
	// const [isWidgetOpen, setIsWidgetOpen] = useState(false)

	// { Controlar visibilidade do Widget * }
	// function toggleWidgetVisibility() {
	// 	setIsWidgetOpen(!isWidgetOpen)
	// }

	return (
	<Popover className='absolute bottom-4 right-4 md:bottom-10 md:right-10 flex-col items-end'>
		{/* { isWidgetOpen && <p>Hellow World</p>} */}
		<Popover.Panel>
			<WidgetForm />
		</Popover.Panel>

		<Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
			<ChatTeardropDots className='w-6 h-6'/>

			<span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear'>
				<span className='pl-2'></span>
					Feedback
			</span>
		</Popover.Button>
	</Popover>
	)
}