const giftees = [
	{ name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
	// More people...
];

import Link from 'next/link';

import GifteeTableRow from './GifteeTableRow';

export default function GifteeTable() {
	return (
		<div className='bg-white p-4 rounded-lg sm:px-6 lg:px-8'>
			<div className='sm:flex sm:items-center'>
				<div className='sm:flex-auto'>
					<h1 className='text-base font-semibold leading-6 text-gray-900'>Users</h1>
					<p className='mt-2 text-sm text-gray-700'>
						A list of all the users in your account including their name, title, email and role.
					</p>
				</div>
				<div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
					<Link
						href='/dashboard/add'
						className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Add Giftee
					</Link>
				</div>
			</div>
			<div className='-mx-4 mt-8 sm:-mx-0'>
				<table className='min-w-full divide-y divide-gray-300'>
					<thead>
						<tr>
							<th
								scope='col'
								className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
							>
								Name
							</th>
							<th
								scope='col'
								className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'
							>
								Title
							</th>
							<th
								scope='col'
								className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell'
							>
								Email
							</th>
							<th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
								Role
							</th>
							<th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
								<span className='sr-only'>Edit</span>
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 bg-white'>
						{giftees.map((giftee) => (
							<GifteeTableRow key={giftee.email} giftee={giftee} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
